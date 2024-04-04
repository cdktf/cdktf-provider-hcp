# `servicePrincipalKey` Submodule <a name="`servicePrincipalKey` Submodule" id="@cdktf/provider-hcp.servicePrincipalKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalKey <a name="ServicePrincipalKey" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/service_principal_key hcp_service_principal_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

new servicePrincipalKey.ServicePrincipalKey(scope: Construct, id: string, config: ServicePrincipalKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig">ServicePrincipalKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig">ServicePrincipalKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.resetRotateTriggers">resetRotateTriggers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRotateTriggers` <a name="resetRotateTriggers" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.resetRotateTriggers"></a>

```typescript
public resetRotateTriggers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServicePrincipalKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isConstruct"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

servicePrincipalKey.ServicePrincipalKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformElement"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

servicePrincipalKey.ServicePrincipalKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformResource"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

servicePrincipalKey.ServicePrincipalKey.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

servicePrincipalKey.ServicePrincipalKey.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServicePrincipalKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServicePrincipalKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServicePrincipalKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/service_principal_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.rotateTriggersInput">rotateTriggersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.servicePrincipalInput">servicePrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.rotateTriggers">rotateTriggers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `rotateTriggersInput`<sup>Optional</sup> <a name="rotateTriggersInput" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.rotateTriggersInput"></a>

```typescript
public readonly rotateTriggersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipalInput`<sup>Optional</sup> <a name="servicePrincipalInput" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.servicePrincipalInput"></a>

```typescript
public readonly servicePrincipalInput: string;
```

- *Type:* string

---

##### `rotateTriggers`<sup>Required</sup> <a name="rotateTriggers" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.rotateTriggers"></a>

```typescript
public readonly rotateTriggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalKeyConfig <a name="ServicePrincipalKeyConfig" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.Initializer"></a>

```typescript
import { servicePrincipalKey } from '@cdktf/provider-hcp'

const servicePrincipalKeyConfig: servicePrincipalKey.ServicePrincipalKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.servicePrincipal">servicePrincipal</a></code> | <code>string</code> | The service principal's resource name for which a key should be created. |
| <code><a href="#@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.rotateTriggers">rotateTriggers</a></code> | <code>{[ key: string ]: string}</code> | A map of arbitrary string key/value pairs that will force recreation of the key when they change, enabling key based on external conditions such as a rotating timestamp. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `servicePrincipal`<sup>Required</sup> <a name="servicePrincipal" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.servicePrincipal"></a>

```typescript
public readonly servicePrincipal: string;
```

- *Type:* string

The service principal's resource name for which a key should be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/service_principal_key#service_principal ServicePrincipalKey#service_principal}

---

##### `rotateTriggers`<sup>Optional</sup> <a name="rotateTriggers" id="@cdktf/provider-hcp.servicePrincipalKey.ServicePrincipalKeyConfig.property.rotateTriggers"></a>

```typescript
public readonly rotateTriggers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of arbitrary string key/value pairs that will force recreation of the key when they change, enabling key based on external conditions such as a rotating timestamp.

Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.85.0/docs/resources/service_principal_key#rotate_triggers ServicePrincipalKey#rotate_triggers}

---



