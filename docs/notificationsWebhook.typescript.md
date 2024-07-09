# `notificationsWebhook` Submodule <a name="`notificationsWebhook` Submodule" id="@cdktf/provider-hcp.notificationsWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsWebhook <a name="NotificationsWebhook" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook hcp_notifications_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhook(scope: Construct, id: string, config: NotificationsWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig">NotificationsWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions">putSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions">resetSubscriptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig"></a>

```typescript
public putConfig(value: NotificationsWebhookConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

---

##### `putSubscriptions` <a name="putSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions"></a>

```typescript
public putSubscriptions(value: IResolvable | NotificationsWebhookSubscriptions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.putSubscriptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetSubscriptions` <a name="resetSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.resetSubscriptions"></a>

```typescript
public resetSubscriptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

notificationsWebhook.NotificationsWebhook.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

notificationsWebhook.NotificationsWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

notificationsWebhook.NotificationsWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

notificationsWebhook.NotificationsWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationsWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationsWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationsWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput">subscriptionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.config"></a>

```typescript
public readonly config: NotificationsWebhookConfigAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference">NotificationsWebhookConfigAOutputReference</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptions"></a>

```typescript
public readonly subscriptions: NotificationsWebhookSubscriptionsList;
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList">NotificationsWebhookSubscriptionsList</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | NotificationsWebhookConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `subscriptionsInput`<sup>Optional</sup> <a name="subscriptionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.subscriptionsInput"></a>

```typescript
public readonly subscriptionsInput: IResolvable | NotificationsWebhookSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsWebhookConfig <a name="NotificationsWebhookConfig" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

const notificationsWebhookConfig: notificationsWebhook.NotificationsWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | The webhook configuration used to deliver event payloads. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name">name</a></code> | <code>string</code> | The webhook's name. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description">description</a></code> | <code>string</code> | The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the project to create the webhook under. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions">subscriptions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]</code> | Set of events to subscribe the webhook to all resources or a specific resource in the project. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.config"></a>

```typescript
public readonly config: NotificationsWebhookConfigA;
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

The webhook configuration used to deliver event payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#config NotificationsWebhook#config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The webhook's name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#name NotificationsWebhook#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The webhook's description. Descriptions are useful for helping others understand the purpose of the webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#description NotificationsWebhook#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the webhook should receive payloads for the subscribed events. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#enabled NotificationsWebhook#enabled}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the project to create the webhook under.

If unspecified, the webhook will be created in the project the provider is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#project_id NotificationsWebhook#project_id}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfig.property.subscriptions"></a>

```typescript
public readonly subscriptions: IResolvable | NotificationsWebhookSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]

Set of events to subscribe the webhook to all resources or a specific resource in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#subscriptions NotificationsWebhook#subscriptions}

---

### NotificationsWebhookConfigA <a name="NotificationsWebhookConfigA" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

const notificationsWebhookConfigA: notificationsWebhook.NotificationsWebhookConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url">url</a></code> | <code>string</code> | The HTTP or HTTPS destination URL that HCP delivers the event payloads to. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey">hmacKey</a></code> | <code>string</code> | The arbitrary secret that HCP uses to sign all its webhook requests. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The HTTP or HTTPS destination URL that HCP delivers the event payloads to.

The destination must be able to use the HCP webhook 
[payload](https://developer.hashicorp.com/hcp/docs/hcp/admin/projects/webhooks#webhook-payload).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#url NotificationsWebhook#url}

---

##### `hmacKey`<sup>Optional</sup> <a name="hmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA.property.hmacKey"></a>

```typescript
public readonly hmacKey: string;
```

- *Type:* string

The arbitrary secret that HCP uses to sign all its webhook requests.

This is a write-only field, it is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#hmac_key NotificationsWebhook#hmac_key}

---

### NotificationsWebhookSubscriptions <a name="NotificationsWebhookSubscriptions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

const notificationsWebhookSubscriptions: notificationsWebhook.NotificationsWebhookSubscriptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events">events</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]</code> | The information about the events of a webhook subscription. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId">resourceId</a></code> | <code>string</code> | Refers to the resource the webhook is subscribed to. |

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.events"></a>

```typescript
public readonly events: IResolvable | NotificationsWebhookSubscriptionsEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]

The information about the events of a webhook subscription.

The service that owns the resource is responsible for maintaining events. Refer to the service's webhook documentation for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#events NotificationsWebhook#events}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Refers to the resource the webhook is subscribed to.

If not set, the webhook subscribes to the emitted events listed in events for any resource in the webhook's project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#resource_id NotificationsWebhook#resource_id}

---

### NotificationsWebhookSubscriptionsEvents <a name="NotificationsWebhookSubscriptionsEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

const notificationsWebhookSubscriptionsEvents: notificationsWebhook.NotificationsWebhookSubscriptionsEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions">actions</a></code> | <code>string[]</code> | The list of event actions subscribed for the resource type set as the [source](#source). |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source">source</a></code> | <code>string</code> | The resource type of the source of the event. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

The list of event actions subscribed for the resource type set as the [source](#source).

For example, `["create", "update"]`. When the action is '*', it means that the webhook is subscribed to all event actions for the event source. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#actions NotificationsWebhook#actions}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

The resource type of the source of the event.

For example, `hashicorp.packer.version`. Event source might not be the same type as the resource that the webhook is subscribed to ([resource_id](#resource_id)) if the event is from a descendant resource. For example, webhooks are subscribed to a `hashicorp.packer.registry` and receive events for descendent resources such as a `hashicorp.packer.version`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.94.1/docs/resources/notifications_webhook#source NotificationsWebhook#source}

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsWebhookConfigAOutputReference <a name="NotificationsWebhookConfigAOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhookConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey">resetHmacKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHmacKey` <a name="resetHmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.resetHmacKey"></a>

```typescript
public resetHmacKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput">hmacKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey">hmacKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hmacKeyInput`<sup>Optional</sup> <a name="hmacKeyInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKeyInput"></a>

```typescript
public readonly hmacKeyInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `hmacKey`<sup>Required</sup> <a name="hmacKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.hmacKey"></a>

```typescript
public readonly hmacKey: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationsWebhookConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookConfigA">NotificationsWebhookConfigA</a>

---


### NotificationsWebhookSubscriptionsEventsList <a name="NotificationsWebhookSubscriptionsEventsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhookSubscriptionsEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get"></a>

```typescript
public get(index: number): NotificationsWebhookSubscriptionsEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationsWebhookSubscriptionsEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]

---


### NotificationsWebhookSubscriptionsEventsOutputReference <a name="NotificationsWebhookSubscriptionsEventsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationsWebhookSubscriptionsEvents;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>

---


### NotificationsWebhookSubscriptionsList <a name="NotificationsWebhookSubscriptionsList" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhookSubscriptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get"></a>

```typescript
public get(index: number): NotificationsWebhookSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationsWebhookSubscriptions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>[]

---


### NotificationsWebhookSubscriptionsOutputReference <a name="NotificationsWebhookSubscriptionsOutputReference" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer"></a>

```typescript
import { notificationsWebhook } from '@cdktf/provider-hcp'

new notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents">putEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEvents` <a name="putEvents" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents"></a>

```typescript
public putEvents(value: IResolvable | NotificationsWebhookSubscriptionsEvents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.putEvents.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]

---

##### `resetResourceId` <a name="resetResourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events">events</a></code> | <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput">eventsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.events"></a>

```typescript
public readonly events: NotificationsWebhookSubscriptionsEventsList;
```

- *Type:* <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEventsList">NotificationsWebhookSubscriptionsEventsList</a>

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: IResolvable | NotificationsWebhookSubscriptionsEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsEvents">NotificationsWebhookSubscriptionsEvents</a>[]

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NotificationsWebhookSubscriptions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.notificationsWebhook.NotificationsWebhookSubscriptions">NotificationsWebhookSubscriptions</a>

---



