# `vaultRadarSecretManagerVaultDedicated` Submodule <a name="`vaultRadarSecretManagerVaultDedicated` Submodule" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultRadarSecretManagerVaultDedicated <a name="VaultRadarSecretManagerVaultDedicated" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated hcp_vault_radar_secret_manager_vault_dedicated}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

new vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated(scope: Construct, id: string, config: VaultRadarSecretManagerVaultDedicatedConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig">VaultRadarSecretManagerVaultDedicatedConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig">VaultRadarSecretManagerVaultDedicatedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush">putApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes">putKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken">putToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite">resetAccessReadWrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush">resetApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes">resetKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApprolePush` <a name="putApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush"></a>

```typescript
public putApprolePush(value: VaultRadarSecretManagerVaultDedicatedApprolePush): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putApprolePush.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `putKubernetes` <a name="putKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes"></a>

```typescript
public putKubernetes(value: VaultRadarSecretManagerVaultDedicatedKubernetes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putKubernetes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `putToken` <a name="putToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken"></a>

```typescript
public putToken(value: VaultRadarSecretManagerVaultDedicatedToken): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.putToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `resetAccessReadWrite` <a name="resetAccessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetAccessReadWrite"></a>

```typescript
public resetAccessReadWrite(): void
```

##### `resetApprolePush` <a name="resetApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetApprolePush"></a>

```typescript
public resetApprolePush(): void
```

##### `resetKubernetes` <a name="resetKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetKubernetes"></a>

```typescript
public resetKubernetes(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetToken` <a name="resetToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultRadarSecretManagerVaultDedicated resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultRadarSecretManagerVaultDedicated to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultRadarSecretManagerVaultDedicated that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultRadarSecretManagerVaultDedicated to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush">approlePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput">accessReadWriteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput">approlePushInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput">kubernetesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput">tokenInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput">vaultUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite">accessReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl">vaultUrl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `approlePush`<sup>Required</sup> <a name="approlePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePush"></a>

```typescript
public readonly approlePush: VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference">VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetes`<sup>Required</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetes"></a>

```typescript
public readonly kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference">VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.token"></a>

```typescript
public readonly token: VaultRadarSecretManagerVaultDedicatedTokenOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference">VaultRadarSecretManagerVaultDedicatedTokenOutputReference</a>

---

##### `accessReadWriteInput`<sup>Optional</sup> <a name="accessReadWriteInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWriteInput"></a>

```typescript
public readonly accessReadWriteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `approlePushInput`<sup>Optional</sup> <a name="approlePushInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.approlePushInput"></a>

```typescript
public readonly approlePushInput: IResolvable | VaultRadarSecretManagerVaultDedicatedApprolePush;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---

##### `kubernetesInput`<sup>Optional</sup> <a name="kubernetesInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.kubernetesInput"></a>

```typescript
public readonly kubernetesInput: IResolvable | VaultRadarSecretManagerVaultDedicatedKubernetes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tokenInput"></a>

```typescript
public readonly tokenInput: IResolvable | VaultRadarSecretManagerVaultDedicatedToken;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---

##### `vaultUrlInput`<sup>Optional</sup> <a name="vaultUrlInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrlInput"></a>

```typescript
public readonly vaultUrlInput: string;
```

- *Type:* string

---

##### `accessReadWrite`<sup>Required</sup> <a name="accessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.accessReadWrite"></a>

```typescript
public readonly accessReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `vaultUrl`<sup>Required</sup> <a name="vaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.vaultUrl"></a>

```typescript
public readonly vaultUrl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicated.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePush <a name="VaultRadarSecretManagerVaultDedicatedApprolePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

const vaultRadarSecretManagerVaultDedicatedApprolePush: vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath">mountPath</a></code> | <code>string</code> | Mount path of the AppRole auth method in Vault. Example 'approle'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar">roleIdEnvVar</a></code> | <code>string</code> | Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar">secretIdEnvVar</a></code> | <code>string</code> | Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Mount path of the AppRole auth method in Vault. Example 'approle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `roleIdEnvVar`<sup>Required</sup> <a name="roleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.roleIdEnvVar"></a>

```typescript
public readonly roleIdEnvVar: string;
```

- *Type:* string

Environment variable containing the AppRole role ID. Example: 'VAULT_APPROLE_ROLE_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_id_env_var VaultRadarSecretManagerVaultDedicated#role_id_env_var}

---

##### `secretIdEnvVar`<sup>Required</sup> <a name="secretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush.property.secretIdEnvVar"></a>

```typescript
public readonly secretIdEnvVar: string;
```

- *Type:* string

Environment variable containing the AppRole secret ID. Example: 'VAULT_APPROLE_SECRET_ID'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#secret_id_env_var VaultRadarSecretManagerVaultDedicated#secret_id_env_var}

---

### VaultRadarSecretManagerVaultDedicatedConfig <a name="VaultRadarSecretManagerVaultDedicatedConfig" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

const vaultRadarSecretManagerVaultDedicatedConfig: vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl">vaultUrl</a></code> | <code>string</code> | Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite">accessReadWrite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if the auth method has read and write access to the secrets engine. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush">approlePush</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | Configuration for AppRole Push-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes">kubernetes</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | Configuration for Kubernetes-based authentication. Only one authentication method may be configured. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where Vault Radar is located. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token">token</a></code> | <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | Configuration for token-based authentication. Only one authentication method may be configured. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `vaultUrl`<sup>Required</sup> <a name="vaultUrl" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.vaultUrl"></a>

```typescript
public readonly vaultUrl: string;
```

- *Type:* string

Specify the URL of the Vault instance without protocol. Example: 'acme-public-vault-abc.def.z1.hashicorp.cloud:8200'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#vault_url VaultRadarSecretManagerVaultDedicated#vault_url}

---

##### `accessReadWrite`<sup>Optional</sup> <a name="accessReadWrite" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.accessReadWrite"></a>

```typescript
public readonly accessReadWrite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if the auth method has read and write access to the secrets engine.

Defaults to false. Set this to true if you want to copy secrets to this secret manager as part of remediation process. (see https://developer.hashicorp.com/hcp/docs/vault-radar/remediate-secrets/copy-secrets)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#access_read_write VaultRadarSecretManagerVaultDedicated#access_read_write}

---

##### `approlePush`<sup>Optional</sup> <a name="approlePush" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.approlePush"></a>

```typescript
public readonly approlePush: VaultRadarSecretManagerVaultDedicatedApprolePush;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

Configuration for AppRole Push-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#approle_push VaultRadarSecretManagerVaultDedicated#approle_push}

---

##### `kubernetes`<sup>Optional</sup> <a name="kubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.kubernetes"></a>

```typescript
public readonly kubernetes: VaultRadarSecretManagerVaultDedicatedKubernetes;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

Configuration for Kubernetes-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#kubernetes VaultRadarSecretManagerVaultDedicated#kubernetes}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where Vault Radar is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#project_id VaultRadarSecretManagerVaultDedicated#project_id}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedConfig.property.token"></a>

```typescript
public readonly token: VaultRadarSecretManagerVaultDedicatedToken;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

Configuration for token-based authentication. Only one authentication method may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token VaultRadarSecretManagerVaultDedicated#token}

---

### VaultRadarSecretManagerVaultDedicatedKubernetes <a name="VaultRadarSecretManagerVaultDedicatedKubernetes" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

const vaultRadarSecretManagerVaultDedicatedKubernetes: vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath">mountPath</a></code> | <code>string</code> | Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName">roleName</a></code> | <code>string</code> | Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

Mount path where the Kubernetes auth method is enabled in Vault. Example 'kubernetes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#mount_path VaultRadarSecretManagerVaultDedicated#mount_path}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Kubernetes authentication role configured in Vault.  Example 'vault-radar-role'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#role_name VaultRadarSecretManagerVaultDedicated#role_name}

---

### VaultRadarSecretManagerVaultDedicatedToken <a name="VaultRadarSecretManagerVaultDedicatedToken" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

const vaultRadarSecretManagerVaultDedicatedToken: vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar">tokenEnvVar</a></code> | <code>string</code> | Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'. |

---

##### `tokenEnvVar`<sup>Required</sup> <a name="tokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken.property.tokenEnvVar"></a>

```typescript
public readonly tokenEnvVar: string;
```

- *Type:* string

Environment variable name containing the Vault token. Example: 'VAULT_TOKEN'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.111.0/docs/resources/vault_radar_secret_manager_vault_dedicated#token_env_var VaultRadarSecretManagerVaultDedicated#token_env_var}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference <a name="VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

new vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput">roleIdEnvVarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput">secretIdEnvVarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar">roleIdEnvVar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar">secretIdEnvVar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `roleIdEnvVarInput`<sup>Optional</sup> <a name="roleIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVarInput"></a>

```typescript
public readonly roleIdEnvVarInput: string;
```

- *Type:* string

---

##### `secretIdEnvVarInput`<sup>Optional</sup> <a name="secretIdEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVarInput"></a>

```typescript
public readonly secretIdEnvVarInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `roleIdEnvVar`<sup>Required</sup> <a name="roleIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.roleIdEnvVar"></a>

```typescript
public readonly roleIdEnvVar: string;
```

- *Type:* string

---

##### `secretIdEnvVar`<sup>Required</sup> <a name="secretIdEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.secretIdEnvVar"></a>

```typescript
public readonly secretIdEnvVar: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePushOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultRadarSecretManagerVaultDedicatedApprolePush;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedApprolePush">VaultRadarSecretManagerVaultDedicatedApprolePush</a>

---


### VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference <a name="VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

new vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultRadarSecretManagerVaultDedicatedKubernetes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedKubernetes">VaultRadarSecretManagerVaultDedicatedKubernetes</a>

---


### VaultRadarSecretManagerVaultDedicatedTokenOutputReference <a name="VaultRadarSecretManagerVaultDedicatedTokenOutputReference" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer"></a>

```typescript
import { vaultRadarSecretManagerVaultDedicated } from '@cdktf/provider-hcp'

new vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput">tokenEnvVarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar">tokenEnvVar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenEnvVarInput`<sup>Optional</sup> <a name="tokenEnvVarInput" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVarInput"></a>

```typescript
public readonly tokenEnvVarInput: string;
```

- *Type:* string

---

##### `tokenEnvVar`<sup>Required</sup> <a name="tokenEnvVar" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.tokenEnvVar"></a>

```typescript
public readonly tokenEnvVar: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedTokenOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultRadarSecretManagerVaultDedicatedToken;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultRadarSecretManagerVaultDedicated.VaultRadarSecretManagerVaultDedicatedToken">VaultRadarSecretManagerVaultDedicatedToken</a>

---



