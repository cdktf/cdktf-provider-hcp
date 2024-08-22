# `vaultCluster` Submodule <a name="`vaultCluster` Submodule" id="@cdktf/provider-hcp.vaultCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultCluster <a name="VaultCluster" id="@cdktf/provider-hcp.vaultCluster.VaultCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster hcp_vault_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultCluster(scope: Construct, id: string, config: VaultClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig">VaultClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig">VaultClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig">putAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist">putIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig">putMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig">putMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig">resetAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetIpAllowlist">resetIpAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig">resetMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig">resetMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion">resetMinVaultVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter">resetPathsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink">resetPrimaryLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProxyEndpoint">resetProxyEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint">resetPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuditLogConfig` <a name="putAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig"></a>

```typescript
public putAuditLogConfig(value: VaultClusterAuditLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putAuditLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `putIpAllowlist` <a name="putIpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist"></a>

```typescript
public putIpAllowlist(value: IResolvable | VaultClusterIpAllowlistStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putIpAllowlist.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]

---

##### `putMajorVersionUpgradeConfig` <a name="putMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig"></a>

```typescript
public putMajorVersionUpgradeConfig(value: VaultClusterMajorVersionUpgradeConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMajorVersionUpgradeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `putMetricsConfig` <a name="putMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig"></a>

```typescript
public putMetricsConfig(value: VaultClusterMetricsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putMetricsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts"></a>

```typescript
public putTimeouts(value: VaultClusterTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

---

##### `resetAuditLogConfig` <a name="resetAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetAuditLogConfig"></a>

```typescript
public resetAuditLogConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAllowlist` <a name="resetIpAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetIpAllowlist"></a>

```typescript
public resetIpAllowlist(): void
```

##### `resetMajorVersionUpgradeConfig` <a name="resetMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMajorVersionUpgradeConfig"></a>

```typescript
public resetMajorVersionUpgradeConfig(): void
```

##### `resetMetricsConfig` <a name="resetMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMetricsConfig"></a>

```typescript
public resetMetricsConfig(): void
```

##### `resetMinVaultVersion` <a name="resetMinVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetMinVaultVersion"></a>

```typescript
public resetMinVaultVersion(): void
```

##### `resetPathsFilter` <a name="resetPathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPathsFilter"></a>

```typescript
public resetPathsFilter(): void
```

##### `resetPrimaryLink` <a name="resetPrimaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPrimaryLink"></a>

```typescript
public resetPrimaryLink(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetProxyEndpoint` <a name="resetProxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetProxyEndpoint"></a>

```typescript
public resetProxyEndpoint(): void
```

##### `resetPublicEndpoint` <a name="resetPublicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetPublicEndpoint"></a>

```typescript
public resetPublicEndpoint(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

vaultCluster.VaultCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

vaultCluster.VaultCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

vaultCluster.VaultCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

vaultCluster.VaultCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider">cloudProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlist">ipAllowlist</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList">VaultClusterIpAllowlistStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl">vaultPrivateEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultProxyEndpointUrl">vaultProxyEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl">vaultPublicEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion">vaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput">auditLogConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput">hvnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlistInput">ipAllowlistInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput">majorVersionUpgradeConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput">metricsConfigInput</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput">minVaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput">pathsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput">primaryLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpointInput">proxyEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput">publicEndpointInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId">hvnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion">minVaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter">pathsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink">primaryLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpoint">proxyEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint">publicEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `auditLogConfig`<sup>Required</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: VaultClusterAuditLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference">VaultClusterAuditLogConfigOutputReference</a>

---

##### `cloudProvider`<sup>Required</sup> <a name="cloudProvider" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.cloudProvider"></a>

```typescript
public readonly cloudProvider: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `ipAllowlist`<sup>Required</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: VaultClusterIpAllowlistStructList;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList">VaultClusterIpAllowlistStructList</a>

---

##### `majorVersionUpgradeConfig`<sup>Required</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfig"></a>

```typescript
public readonly majorVersionUpgradeConfig: VaultClusterMajorVersionUpgradeConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference">VaultClusterMajorVersionUpgradeConfigOutputReference</a>

---

##### `metricsConfig`<sup>Required</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: VaultClusterMetricsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference">VaultClusterMetricsConfigOutputReference</a>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeouts"></a>

```typescript
public readonly timeouts: VaultClusterTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference">VaultClusterTimeoutsOutputReference</a>

---

##### `vaultPrivateEndpointUrl`<sup>Required</sup> <a name="vaultPrivateEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPrivateEndpointUrl"></a>

```typescript
public readonly vaultPrivateEndpointUrl: string;
```

- *Type:* string

---

##### `vaultProxyEndpointUrl`<sup>Required</sup> <a name="vaultProxyEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultProxyEndpointUrl"></a>

```typescript
public readonly vaultProxyEndpointUrl: string;
```

- *Type:* string

---

##### `vaultPublicEndpointUrl`<sup>Required</sup> <a name="vaultPublicEndpointUrl" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultPublicEndpointUrl"></a>

```typescript
public readonly vaultPublicEndpointUrl: string;
```

- *Type:* string

---

##### `vaultVersion`<sup>Required</sup> <a name="vaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.vaultVersion"></a>

```typescript
public readonly vaultVersion: string;
```

- *Type:* string

---

##### `auditLogConfigInput`<sup>Optional</sup> <a name="auditLogConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.auditLogConfigInput"></a>

```typescript
public readonly auditLogConfigInput: VaultClusterAuditLogConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `hvnIdInput`<sup>Optional</sup> <a name="hvnIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnIdInput"></a>

```typescript
public readonly hvnIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAllowlistInput`<sup>Optional</sup> <a name="ipAllowlistInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.ipAllowlistInput"></a>

```typescript
public readonly ipAllowlistInput: IResolvable | VaultClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]

---

##### `majorVersionUpgradeConfigInput`<sup>Optional</sup> <a name="majorVersionUpgradeConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.majorVersionUpgradeConfigInput"></a>

```typescript
public readonly majorVersionUpgradeConfigInput: VaultClusterMajorVersionUpgradeConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---

##### `metricsConfigInput`<sup>Optional</sup> <a name="metricsConfigInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.metricsConfigInput"></a>

```typescript
public readonly metricsConfigInput: VaultClusterMetricsConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---

##### `minVaultVersionInput`<sup>Optional</sup> <a name="minVaultVersionInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersionInput"></a>

```typescript
public readonly minVaultVersionInput: string;
```

- *Type:* string

---

##### `pathsFilterInput`<sup>Optional</sup> <a name="pathsFilterInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilterInput"></a>

```typescript
public readonly pathsFilterInput: string[];
```

- *Type:* string[]

---

##### `primaryLinkInput`<sup>Optional</sup> <a name="primaryLinkInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLinkInput"></a>

```typescript
public readonly primaryLinkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `proxyEndpointInput`<sup>Optional</sup> <a name="proxyEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpointInput"></a>

```typescript
public readonly proxyEndpointInput: string;
```

- *Type:* string

---

##### `publicEndpointInput`<sup>Optional</sup> <a name="publicEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpointInput"></a>

```typescript
public readonly publicEndpointInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VaultClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `minVaultVersion`<sup>Required</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.minVaultVersion"></a>

```typescript
public readonly minVaultVersion: string;
```

- *Type:* string

---

##### `pathsFilter`<sup>Required</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.pathsFilter"></a>

```typescript
public readonly pathsFilter: string[];
```

- *Type:* string[]

---

##### `primaryLink`<sup>Required</sup> <a name="primaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.primaryLink"></a>

```typescript
public readonly primaryLink: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `proxyEndpoint`<sup>Required</sup> <a name="proxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.proxyEndpoint"></a>

```typescript
public readonly proxyEndpoint: string;
```

- *Type:* string

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultCluster.VaultCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultClusterAuditLogConfig <a name="VaultClusterAuditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterAuditLogConfig: vaultCluster.VaultClusterAuditLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>string</code> | CloudWatch access key ID for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>string</code> | CloudWatch region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>string</code> | CloudWatch secret access key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion">datadogRegion</a></code> | <code>string</code> | Datadog region for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>string</code> | ElasticSearch endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | ElasticSearch password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchUser">elasticsearchUser</a></code> | <code>string</code> | ElasticSearch user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword">grafanaPassword</a></code> | <code>string</code> | Grafana password for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser">grafanaUser</a></code> | <code>string</code> | Grafana user for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicPassword">httpBasicPassword</a></code> | <code>string</code> | HTTP basic authentication password for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user is also provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicUser">httpBasicUser</a></code> | <code>string</code> | HTTP basic authentication username for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_password is also provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBearerToken">httpBearerToken</a></code> | <code>string</code> | HTTP bearer authentication token for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCodec">httpCodec</a></code> | <code>string</code> | HTTP codec for streaming audit logs, allowed values are JSON and NDJSON. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCompression">httpCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | HTTP compression flag for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | HTTP payload method for streaming audit logs, , allowed values are PATCH, POST, or PUT. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>string</code> | HTTP payload prefix for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>string</code> | HTTP payload suffix for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpUri">httpUri</a></code> | <code>string</code> | HTTP URI for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicAccountId">newrelicAccountId</a></code> | <code>string</code> | NewRelic Account ID for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>string</code> | NewRelic license key for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicRegion">newrelicRegion</a></code> | <code>string</code> | NewRelic region for streaming audit logs, allowed values are "US" and "EU". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming audit logs. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken">splunkToken</a></code> | <code>string</code> | Splunk token for streaming audit logs. |

---

##### `cloudwatchAccessKeyId`<sup>Optional</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchAccessKeyId"></a>

```typescript
public readonly cloudwatchAccessKeyId: string;
```

- *Type:* string

CloudWatch access key ID for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}

---

##### `cloudwatchRegion`<sup>Optional</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchRegion"></a>

```typescript
public readonly cloudwatchRegion: string;
```

- *Type:* string

CloudWatch region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}

---

##### `cloudwatchSecretAccessKey`<sup>Optional</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.cloudwatchSecretAccessKey"></a>

```typescript
public readonly cloudwatchSecretAccessKey: string;
```

- *Type:* string

CloudWatch secret access key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string

Datadog api key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadogRegion`<sup>Optional</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.datadogRegion"></a>

```typescript
public readonly datadogRegion: string;
```

- *Type:* string

Datadog region for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `elasticsearchEndpoint`<sup>Optional</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchEndpoint"></a>

```typescript
public readonly elasticsearchEndpoint: string;
```

- *Type:* string

ElasticSearch endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}

---

##### `elasticsearchPassword`<sup>Optional</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

ElasticSearch password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}

---

##### `elasticsearchUser`<sup>Optional</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.elasticsearchUser"></a>

```typescript
public readonly elasticsearchUser: string;
```

- *Type:* string

ElasticSearch user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}

---

##### `grafanaEndpoint`<sup>Optional</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaEndpoint"></a>

```typescript
public readonly grafanaEndpoint: string;
```

- *Type:* string

Grafana endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafanaPassword`<sup>Optional</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaPassword"></a>

```typescript
public readonly grafanaPassword: string;
```

- *Type:* string

Grafana password for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafanaUser`<sup>Optional</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.grafanaUser"></a>

```typescript
public readonly grafanaUser: string;
```

- *Type:* string

Grafana user for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `httpBasicPassword`<sup>Optional</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicPassword"></a>

```typescript
public readonly httpBasicPassword: string;
```

- *Type:* string

HTTP basic authentication password for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}

---

##### `httpBasicUser`<sup>Optional</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBasicUser"></a>

```typescript
public readonly httpBasicUser: string;
```

- *Type:* string

HTTP basic authentication username for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_password is also provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}

---

##### `httpBearerToken`<sup>Optional</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpBearerToken"></a>

```typescript
public readonly httpBearerToken: string;
```

- *Type:* string

HTTP bearer authentication token for streaming audit logs, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}

---

##### `httpCodec`<sup>Optional</sup> <a name="httpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCodec"></a>

```typescript
public readonly httpCodec: string;
```

- *Type:* string

HTTP codec for streaming audit logs, allowed values are JSON and NDJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}

---

##### `httpCompression`<sup>Optional</sup> <a name="httpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpCompression"></a>

```typescript
public readonly httpCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

HTTP compression flag for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

HTTP payload method for streaming audit logs, , allowed values are PATCH, POST, or PUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}

---

##### `httpPayloadPrefix`<sup>Optional</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadPrefix"></a>

```typescript
public readonly httpPayloadPrefix: string;
```

- *Type:* string

HTTP payload prefix for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}

---

##### `httpPayloadSuffix`<sup>Optional</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpPayloadSuffix"></a>

```typescript
public readonly httpPayloadSuffix: string;
```

- *Type:* string

HTTP payload suffix for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}

---

##### `httpUri`<sup>Optional</sup> <a name="httpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.httpUri"></a>

```typescript
public readonly httpUri: string;
```

- *Type:* string

HTTP URI for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}

---

##### `newrelicAccountId`<sup>Optional</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicAccountId"></a>

```typescript
public readonly newrelicAccountId: string;
```

- *Type:* string

NewRelic Account ID for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}

---

##### `newrelicLicenseKey`<sup>Optional</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicLicenseKey"></a>

```typescript
public readonly newrelicLicenseKey: string;
```

- *Type:* string

NewRelic license key for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}

---

##### `newrelicRegion`<sup>Optional</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.newrelicRegion"></a>

```typescript
public readonly newrelicRegion: string;
```

- *Type:* string

NewRelic region for streaming audit logs, allowed values are "US" and "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}

---

##### `splunkHecendpoint`<sup>Optional</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkHecendpoint"></a>

```typescript
public readonly splunkHecendpoint: string;
```

- *Type:* string

Splunk endpoint for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunkToken`<sup>Optional</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig.property.splunkToken"></a>

```typescript
public readonly splunkToken: string;
```

- *Type:* string

Splunk token for streaming audit logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterConfig <a name="VaultClusterConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterConfig: vaultCluster.VaultClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The ID of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId">hvnId</a></code> | <code>string</code> | The ID of the HVN this HCP Vault cluster is associated to. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig">auditLogConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#id VaultCluster#id}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.ipAllowlist">ipAllowlist</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]</code> | ip_allowlist block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig">majorVersionUpgradeConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | major_version_upgrade_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig">metricsConfig</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | metrics_config block. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion">minVaultVersion</a></code> | <code>string</code> | The minimum Vault version to use when creating the cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter">pathsFilter</a></code> | <code>string[]</code> | The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink">primaryLink</a></code> | <code>string</code> | The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId">projectId</a></code> | <code>string</code> | The ID of the HCP project where the Vault cluster is located. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.proxyEndpoint">proxyEndpoint</a></code> | <code>string</code> | Denotes that the cluster has a proxy endpoint. Valid options are `ENABLED`, `DISABLED`. Defaults to `DISABLED`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint">publicEndpoint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes that the cluster has a public endpoint. Defaults to false. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier">tier</a></code> | <code>string</code> | Tier of the HCP Vault cluster. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ID of the HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cluster_id VaultCluster#cluster_id}

---

##### `hvnId`<sup>Required</sup> <a name="hvnId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.hvnId"></a>

```typescript
public readonly hvnId: string;
```

- *Type:* string

The ID of the HVN this HCP Vault cluster is associated to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#hvn_id VaultCluster#hvn_id}

---

##### `auditLogConfig`<sup>Optional</sup> <a name="auditLogConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.auditLogConfig"></a>

```typescript
public readonly auditLogConfig: VaultClusterAuditLogConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#audit_log_config VaultCluster#audit_log_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#id VaultCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAllowlist`<sup>Optional</sup> <a name="ipAllowlist" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.ipAllowlist"></a>

```typescript
public readonly ipAllowlist: IResolvable | VaultClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]

ip_allowlist block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#ip_allowlist VaultCluster#ip_allowlist}

---

##### `majorVersionUpgradeConfig`<sup>Optional</sup> <a name="majorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.majorVersionUpgradeConfig"></a>

```typescript
public readonly majorVersionUpgradeConfig: VaultClusterMajorVersionUpgradeConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

major_version_upgrade_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#major_version_upgrade_config VaultCluster#major_version_upgrade_config}

---

##### `metricsConfig`<sup>Optional</sup> <a name="metricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.metricsConfig"></a>

```typescript
public readonly metricsConfig: VaultClusterMetricsConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

metrics_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#metrics_config VaultCluster#metrics_config}

---

##### `minVaultVersion`<sup>Optional</sup> <a name="minVaultVersion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.minVaultVersion"></a>

```typescript
public readonly minVaultVersion: string;
```

- *Type:* string

The minimum Vault version to use when creating the cluster.

If not specified, it is defaulted to the version that is currently recommended by HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#min_vault_version VaultCluster#min_vault_version}

---

##### `pathsFilter`<sup>Optional</sup> <a name="pathsFilter" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.pathsFilter"></a>

```typescript
public readonly pathsFilter: string[];
```

- *Type:* string[]

The performance replication [paths filter](https://developer.hashicorp.com/vault/tutorials/cloud-ops/vault-replication-terraform). Applies to performance replication secondaries only and operates in "deny" mode only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#paths_filter VaultCluster#paths_filter}

---

##### `primaryLink`<sup>Optional</sup> <a name="primaryLink" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.primaryLink"></a>

```typescript
public readonly primaryLink: string;
```

- *Type:* string

The `self_link` of the HCP Vault Plus tier cluster which is the primary in the performance replication setup with this HCP Vault Plus tier cluster.

If not specified, it is a standalone Plus tier HCP Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#primary_link VaultCluster#primary_link}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The ID of the HCP project where the Vault cluster is located.

If not specified, the project specified in the HCP Provider config block will be used, if configured.
If a project is not configured in the HCP Provider config block, the oldest project in the organization will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#project_id VaultCluster#project_id}

---

##### `proxyEndpoint`<sup>Optional</sup> <a name="proxyEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.proxyEndpoint"></a>

```typescript
public readonly proxyEndpoint: string;
```

- *Type:* string

Denotes that the cluster has a proxy endpoint. Valid options are `ENABLED`, `DISABLED`. Defaults to `DISABLED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#proxy_endpoint VaultCluster#proxy_endpoint}

---

##### `publicEndpoint`<sup>Optional</sup> <a name="publicEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes that the cluster has a public endpoint. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#public_endpoint VaultCluster#public_endpoint}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Tier of the HCP Vault cluster.

Valid options for tiers - `dev`, `starter_small`, `standard_small`, `standard_medium`, `standard_large`, `plus_small`, `plus_medium`, `plus_large`. See [pricing information](https://www.hashicorp.com/products/vault/pricing). Changing a cluster's size or tier is only available to admins. See [Scale a cluster](https://registry.terraform.io/providers/hashicorp/hcp/latest/docs/guides/vault-scaling).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#tier VaultCluster#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VaultClusterTimeouts;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#timeouts VaultCluster#timeouts}

---

### VaultClusterIpAllowlistStruct <a name="VaultClusterIpAllowlistStruct" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterIpAllowlistStruct: vaultCluster.VaultClusterIpAllowlistStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.address">address</a></code> | <code>string</code> | IP address range in CIDR notation. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.description">description</a></code> | <code>string</code> | Description to help identify source (maximum 255 chars). |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

IP address range in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#address VaultCluster#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description to help identify source (maximum 255 chars).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#description VaultCluster#description}

---

### VaultClusterMajorVersionUpgradeConfig <a name="VaultClusterMajorVersionUpgradeConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterMajorVersionUpgradeConfig: vaultCluster.VaultClusterMajorVersionUpgradeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType">upgradeType</a></code> | <code>string</code> | The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay">maintenanceWindowDay</a></code> | <code>string</code> | The maintenance day of the week for scheduled upgrades. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`. |

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.upgradeType"></a>

```typescript
public readonly upgradeType: string;
```

- *Type:* string

The major upgrade type for the cluster. Valid options for upgrade type - `AUTOMATIC`, `SCHEDULED`, `MANUAL`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#upgrade_type VaultCluster#upgrade_type}

---

##### `maintenanceWindowDay`<sup>Optional</sup> <a name="maintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowDay"></a>

```typescript
public readonly maintenanceWindowDay: string;
```

- *Type:* string

The maintenance day of the week for scheduled upgrades.

Valid options for maintenance window day - `MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#maintenance_window_day VaultCluster#maintenance_window_day}

---

##### `maintenanceWindowTime`<sup>Optional</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

The maintenance time frame for scheduled upgrades. Valid options for maintenance window time - `WINDOW_12AM_4AM`, `WINDOW_6AM_10AM`, `WINDOW_12PM_4PM`, `WINDOW_6PM_10PM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#maintenance_window_time VaultCluster#maintenance_window_time}

---

### VaultClusterMetricsConfig <a name="VaultClusterMetricsConfig" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterMetricsConfig: vaultCluster.VaultClusterMetricsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>string</code> | CloudWatch access key ID for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>string</code> | CloudWatch region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>string</code> | CloudWatch secret access key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | Datadog api key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion">datadogRegion</a></code> | <code>string</code> | Datadog region for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>string</code> | ElasticSearch endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | ElasticSearch password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchUser">elasticsearchUser</a></code> | <code>string</code> | ElasticSearch user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>string</code> | Grafana endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword">grafanaPassword</a></code> | <code>string</code> | Grafana password for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser">grafanaUser</a></code> | <code>string</code> | Grafana user for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicPassword">httpBasicPassword</a></code> | <code>string</code> | HTTP basic authentication password for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user is also specified. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicUser">httpBasicUser</a></code> | <code>string</code> | HTTP basic authentication username for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_password is also specified. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBearerToken">httpBearerToken</a></code> | <code>string</code> | HTTP bearer authentication token for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCodec">httpCodec</a></code> | <code>string</code> | HTTP codec for streaming metrics, allowed values are JSON and NDJSON. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCompression">httpCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | HTTP compression flag for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpMethod">httpMethod</a></code> | <code>string</code> | HTTP payload method for streaming metrics, allowed values are PATCH, POST, or PUT. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>string</code> | HTTP payload prefix for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>string</code> | HTTP payload suffix for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpUri">httpUri</a></code> | <code>string</code> | HTTP URI for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicAccountId">newrelicAccountId</a></code> | <code>string</code> | NewRelic Account ID for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>string</code> | NewRelic license key for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicRegion">newrelicRegion</a></code> | <code>string</code> | NewRelic region for streaming metrics, allowed values are "US" and "EU". |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>string</code> | Splunk endpoint for streaming metrics. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken">splunkToken</a></code> | <code>string</code> | Splunk token for streaming metrics. |

---

##### `cloudwatchAccessKeyId`<sup>Optional</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchAccessKeyId"></a>

```typescript
public readonly cloudwatchAccessKeyId: string;
```

- *Type:* string

CloudWatch access key ID for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_access_key_id VaultCluster#cloudwatch_access_key_id}

---

##### `cloudwatchRegion`<sup>Optional</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchRegion"></a>

```typescript
public readonly cloudwatchRegion: string;
```

- *Type:* string

CloudWatch region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_region VaultCluster#cloudwatch_region}

---

##### `cloudwatchSecretAccessKey`<sup>Optional</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.cloudwatchSecretAccessKey"></a>

```typescript
public readonly cloudwatchSecretAccessKey: string;
```

- *Type:* string

CloudWatch secret access key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#cloudwatch_secret_access_key VaultCluster#cloudwatch_secret_access_key}

---

##### `datadogApiKey`<sup>Optional</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string

Datadog api key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#datadog_api_key VaultCluster#datadog_api_key}

---

##### `datadogRegion`<sup>Optional</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.datadogRegion"></a>

```typescript
public readonly datadogRegion: string;
```

- *Type:* string

Datadog region for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#datadog_region VaultCluster#datadog_region}

---

##### `elasticsearchEndpoint`<sup>Optional</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchEndpoint"></a>

```typescript
public readonly elasticsearchEndpoint: string;
```

- *Type:* string

ElasticSearch endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_endpoint VaultCluster#elasticsearch_endpoint}

---

##### `elasticsearchPassword`<sup>Optional</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

ElasticSearch password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_password VaultCluster#elasticsearch_password}

---

##### `elasticsearchUser`<sup>Optional</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.elasticsearchUser"></a>

```typescript
public readonly elasticsearchUser: string;
```

- *Type:* string

ElasticSearch user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#elasticsearch_user VaultCluster#elasticsearch_user}

---

##### `grafanaEndpoint`<sup>Optional</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaEndpoint"></a>

```typescript
public readonly grafanaEndpoint: string;
```

- *Type:* string

Grafana endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_endpoint VaultCluster#grafana_endpoint}

---

##### `grafanaPassword`<sup>Optional</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaPassword"></a>

```typescript
public readonly grafanaPassword: string;
```

- *Type:* string

Grafana password for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_password VaultCluster#grafana_password}

---

##### `grafanaUser`<sup>Optional</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.grafanaUser"></a>

```typescript
public readonly grafanaUser: string;
```

- *Type:* string

Grafana user for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#grafana_user VaultCluster#grafana_user}

---

##### `httpBasicPassword`<sup>Optional</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicPassword"></a>

```typescript
public readonly httpBasicPassword: string;
```

- *Type:* string

HTTP basic authentication password for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_basic_password VaultCluster#http_basic_password}

---

##### `httpBasicUser`<sup>Optional</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBasicUser"></a>

```typescript
public readonly httpBasicUser: string;
```

- *Type:* string

HTTP basic authentication username for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_password is also specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_basic_user VaultCluster#http_basic_user}

---

##### `httpBearerToken`<sup>Optional</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpBearerToken"></a>

```typescript
public readonly httpBearerToken: string;
```

- *Type:* string

HTTP bearer authentication token for streaming metrics, one of the two available authentication methods, can be specified only if http_basic_user and http_basic_password are not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_bearer_token VaultCluster#http_bearer_token}

---

##### `httpCodec`<sup>Optional</sup> <a name="httpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCodec"></a>

```typescript
public readonly httpCodec: string;
```

- *Type:* string

HTTP codec for streaming metrics, allowed values are JSON and NDJSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_codec VaultCluster#http_codec}

---

##### `httpCompression`<sup>Optional</sup> <a name="httpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpCompression"></a>

```typescript
public readonly httpCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

HTTP compression flag for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_compression VaultCluster#http_compression}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_headers VaultCluster#http_headers}

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

HTTP payload method for streaming metrics, allowed values are PATCH, POST, or PUT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_method VaultCluster#http_method}

---

##### `httpPayloadPrefix`<sup>Optional</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadPrefix"></a>

```typescript
public readonly httpPayloadPrefix: string;
```

- *Type:* string

HTTP payload prefix for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_payload_prefix VaultCluster#http_payload_prefix}

---

##### `httpPayloadSuffix`<sup>Optional</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpPayloadSuffix"></a>

```typescript
public readonly httpPayloadSuffix: string;
```

- *Type:* string

HTTP payload suffix for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_payload_suffix VaultCluster#http_payload_suffix}

---

##### `httpUri`<sup>Optional</sup> <a name="httpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.httpUri"></a>

```typescript
public readonly httpUri: string;
```

- *Type:* string

HTTP URI for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#http_uri VaultCluster#http_uri}

---

##### `newrelicAccountId`<sup>Optional</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicAccountId"></a>

```typescript
public readonly newrelicAccountId: string;
```

- *Type:* string

NewRelic Account ID for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_account_id VaultCluster#newrelic_account_id}

---

##### `newrelicLicenseKey`<sup>Optional</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicLicenseKey"></a>

```typescript
public readonly newrelicLicenseKey: string;
```

- *Type:* string

NewRelic license key for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_license_key VaultCluster#newrelic_license_key}

---

##### `newrelicRegion`<sup>Optional</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.newrelicRegion"></a>

```typescript
public readonly newrelicRegion: string;
```

- *Type:* string

NewRelic region for streaming metrics, allowed values are "US" and "EU".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#newrelic_region VaultCluster#newrelic_region}

---

##### `splunkHecendpoint`<sup>Optional</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkHecendpoint"></a>

```typescript
public readonly splunkHecendpoint: string;
```

- *Type:* string

Splunk endpoint for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#splunk_hecendpoint VaultCluster#splunk_hecendpoint}

---

##### `splunkToken`<sup>Optional</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig.property.splunkToken"></a>

```typescript
public readonly splunkToken: string;
```

- *Type:* string

Splunk token for streaming metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#splunk_token VaultCluster#splunk_token}

---

### VaultClusterTimeouts <a name="VaultClusterTimeouts" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

const vaultClusterTimeouts: vaultCluster.VaultClusterTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#create VaultCluster#create}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#default VaultCluster#default}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#delete VaultCluster#delete}. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#update VaultCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#create VaultCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#default VaultCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#delete VaultCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.95.0/docs/resources/vault_cluster#update VaultCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VaultClusterAuditLogConfigOutputReference <a name="VaultClusterAuditLogConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterAuditLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchAccessKeyId">resetCloudwatchAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchRegion">resetCloudwatchRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchSecretAccessKey">resetCloudwatchSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey">resetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion">resetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchEndpoint">resetElasticsearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchPassword">resetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchUser">resetElasticsearchUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint">resetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword">resetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser">resetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicPassword">resetHttpBasicPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicUser">resetHttpBasicUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBearerToken">resetHttpBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCodec">resetHttpCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCompression">resetHttpCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadPrefix">resetHttpPayloadPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadSuffix">resetHttpPayloadSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpUri">resetHttpUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicAccountId">resetNewrelicAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicLicenseKey">resetNewrelicLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicRegion">resetNewrelicRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint">resetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken">resetSplunkToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchAccessKeyId` <a name="resetCloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchAccessKeyId"></a>

```typescript
public resetCloudwatchAccessKeyId(): void
```

##### `resetCloudwatchRegion` <a name="resetCloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchRegion"></a>

```typescript
public resetCloudwatchRegion(): void
```

##### `resetCloudwatchSecretAccessKey` <a name="resetCloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetCloudwatchSecretAccessKey"></a>

```typescript
public resetCloudwatchSecretAccessKey(): void
```

##### `resetDatadogApiKey` <a name="resetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogApiKey"></a>

```typescript
public resetDatadogApiKey(): void
```

##### `resetDatadogRegion` <a name="resetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetDatadogRegion"></a>

```typescript
public resetDatadogRegion(): void
```

##### `resetElasticsearchEndpoint` <a name="resetElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchEndpoint"></a>

```typescript
public resetElasticsearchEndpoint(): void
```

##### `resetElasticsearchPassword` <a name="resetElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchPassword"></a>

```typescript
public resetElasticsearchPassword(): void
```

##### `resetElasticsearchUser` <a name="resetElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetElasticsearchUser"></a>

```typescript
public resetElasticsearchUser(): void
```

##### `resetGrafanaEndpoint` <a name="resetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaEndpoint"></a>

```typescript
public resetGrafanaEndpoint(): void
```

##### `resetGrafanaPassword` <a name="resetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaPassword"></a>

```typescript
public resetGrafanaPassword(): void
```

##### `resetGrafanaUser` <a name="resetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetGrafanaUser"></a>

```typescript
public resetGrafanaUser(): void
```

##### `resetHttpBasicPassword` <a name="resetHttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicPassword"></a>

```typescript
public resetHttpBasicPassword(): void
```

##### `resetHttpBasicUser` <a name="resetHttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBasicUser"></a>

```typescript
public resetHttpBasicUser(): void
```

##### `resetHttpBearerToken` <a name="resetHttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpBearerToken"></a>

```typescript
public resetHttpBearerToken(): void
```

##### `resetHttpCodec` <a name="resetHttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCodec"></a>

```typescript
public resetHttpCodec(): void
```

##### `resetHttpCompression` <a name="resetHttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpCompression"></a>

```typescript
public resetHttpCompression(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetHttpPayloadPrefix` <a name="resetHttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadPrefix"></a>

```typescript
public resetHttpPayloadPrefix(): void
```

##### `resetHttpPayloadSuffix` <a name="resetHttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpPayloadSuffix"></a>

```typescript
public resetHttpPayloadSuffix(): void
```

##### `resetHttpUri` <a name="resetHttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetHttpUri"></a>

```typescript
public resetHttpUri(): void
```

##### `resetNewrelicAccountId` <a name="resetNewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicAccountId"></a>

```typescript
public resetNewrelicAccountId(): void
```

##### `resetNewrelicLicenseKey` <a name="resetNewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicLicenseKey"></a>

```typescript
public resetNewrelicLicenseKey(): void
```

##### `resetNewrelicRegion` <a name="resetNewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetNewrelicRegion"></a>

```typescript
public resetNewrelicRegion(): void
```

##### `resetSplunkHecendpoint` <a name="resetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkHecendpoint"></a>

```typescript
public resetSplunkHecendpoint(): void
```

##### `resetSplunkToken` <a name="resetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.resetSplunkToken"></a>

```typescript
public resetSplunkToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName">cloudwatchGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName">cloudwatchStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset">elasticsearchDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyIdInput">cloudwatchAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegionInput">cloudwatchRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKeyInput">cloudwatchSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput">datadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput">datadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpointInput">elasticsearchEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPasswordInput">elasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUserInput">elasticsearchUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput">grafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput">grafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput">grafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPasswordInput">httpBasicPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUserInput">httpBasicUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerTokenInput">httpBearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodecInput">httpCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompressionInput">httpCompressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefixInput">httpPayloadPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffixInput">httpPayloadSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUriInput">httpUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountIdInput">newrelicAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKeyInput">newrelicLicenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegionInput">newrelicRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput">splunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput">splunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUser">elasticsearchUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword">grafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPassword">httpBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUser">httpBasicUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerToken">httpBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodec">httpCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompression">httpCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUri">httpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountId">newrelicAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegion">newrelicRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken">splunkToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchGroupName`<sup>Required</sup> <a name="cloudwatchGroupName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchGroupName"></a>

```typescript
public readonly cloudwatchGroupName: string;
```

- *Type:* string

---

##### `cloudwatchStreamName`<sup>Required</sup> <a name="cloudwatchStreamName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchStreamName"></a>

```typescript
public readonly cloudwatchStreamName: string;
```

- *Type:* string

---

##### `elasticsearchDataset`<sup>Required</sup> <a name="elasticsearchDataset" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchDataset"></a>

```typescript
public readonly elasticsearchDataset: string;
```

- *Type:* string

---

##### `cloudwatchAccessKeyIdInput`<sup>Optional</sup> <a name="cloudwatchAccessKeyIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyIdInput"></a>

```typescript
public readonly cloudwatchAccessKeyIdInput: string;
```

- *Type:* string

---

##### `cloudwatchRegionInput`<sup>Optional</sup> <a name="cloudwatchRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegionInput"></a>

```typescript
public readonly cloudwatchRegionInput: string;
```

- *Type:* string

---

##### `cloudwatchSecretAccessKeyInput`<sup>Optional</sup> <a name="cloudwatchSecretAccessKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKeyInput"></a>

```typescript
public readonly cloudwatchSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `datadogApiKeyInput`<sup>Optional</sup> <a name="datadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKeyInput"></a>

```typescript
public readonly datadogApiKeyInput: string;
```

- *Type:* string

---

##### `datadogRegionInput`<sup>Optional</sup> <a name="datadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegionInput"></a>

```typescript
public readonly datadogRegionInput: string;
```

- *Type:* string

---

##### `elasticsearchEndpointInput`<sup>Optional</sup> <a name="elasticsearchEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpointInput"></a>

```typescript
public readonly elasticsearchEndpointInput: string;
```

- *Type:* string

---

##### `elasticsearchPasswordInput`<sup>Optional</sup> <a name="elasticsearchPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPasswordInput"></a>

```typescript
public readonly elasticsearchPasswordInput: string;
```

- *Type:* string

---

##### `elasticsearchUserInput`<sup>Optional</sup> <a name="elasticsearchUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUserInput"></a>

```typescript
public readonly elasticsearchUserInput: string;
```

- *Type:* string

---

##### `grafanaEndpointInput`<sup>Optional</sup> <a name="grafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpointInput"></a>

```typescript
public readonly grafanaEndpointInput: string;
```

- *Type:* string

---

##### `grafanaPasswordInput`<sup>Optional</sup> <a name="grafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPasswordInput"></a>

```typescript
public readonly grafanaPasswordInput: string;
```

- *Type:* string

---

##### `grafanaUserInput`<sup>Optional</sup> <a name="grafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUserInput"></a>

```typescript
public readonly grafanaUserInput: string;
```

- *Type:* string

---

##### `httpBasicPasswordInput`<sup>Optional</sup> <a name="httpBasicPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPasswordInput"></a>

```typescript
public readonly httpBasicPasswordInput: string;
```

- *Type:* string

---

##### `httpBasicUserInput`<sup>Optional</sup> <a name="httpBasicUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUserInput"></a>

```typescript
public readonly httpBasicUserInput: string;
```

- *Type:* string

---

##### `httpBearerTokenInput`<sup>Optional</sup> <a name="httpBearerTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerTokenInput"></a>

```typescript
public readonly httpBearerTokenInput: string;
```

- *Type:* string

---

##### `httpCodecInput`<sup>Optional</sup> <a name="httpCodecInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodecInput"></a>

```typescript
public readonly httpCodecInput: string;
```

- *Type:* string

---

##### `httpCompressionInput`<sup>Optional</sup> <a name="httpCompressionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompressionInput"></a>

```typescript
public readonly httpCompressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `httpPayloadPrefixInput`<sup>Optional</sup> <a name="httpPayloadPrefixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefixInput"></a>

```typescript
public readonly httpPayloadPrefixInput: string;
```

- *Type:* string

---

##### `httpPayloadSuffixInput`<sup>Optional</sup> <a name="httpPayloadSuffixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffixInput"></a>

```typescript
public readonly httpPayloadSuffixInput: string;
```

- *Type:* string

---

##### `httpUriInput`<sup>Optional</sup> <a name="httpUriInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUriInput"></a>

```typescript
public readonly httpUriInput: string;
```

- *Type:* string

---

##### `newrelicAccountIdInput`<sup>Optional</sup> <a name="newrelicAccountIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountIdInput"></a>

```typescript
public readonly newrelicAccountIdInput: string;
```

- *Type:* string

---

##### `newrelicLicenseKeyInput`<sup>Optional</sup> <a name="newrelicLicenseKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKeyInput"></a>

```typescript
public readonly newrelicLicenseKeyInput: string;
```

- *Type:* string

---

##### `newrelicRegionInput`<sup>Optional</sup> <a name="newrelicRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegionInput"></a>

```typescript
public readonly newrelicRegionInput: string;
```

- *Type:* string

---

##### `splunkHecendpointInput`<sup>Optional</sup> <a name="splunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpointInput"></a>

```typescript
public readonly splunkHecendpointInput: string;
```

- *Type:* string

---

##### `splunkTokenInput`<sup>Optional</sup> <a name="splunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkTokenInput"></a>

```typescript
public readonly splunkTokenInput: string;
```

- *Type:* string

---

##### `cloudwatchAccessKeyId`<sup>Required</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```typescript
public readonly cloudwatchAccessKeyId: string;
```

- *Type:* string

---

##### `cloudwatchRegion`<sup>Required</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchRegion"></a>

```typescript
public readonly cloudwatchRegion: string;
```

- *Type:* string

---

##### `cloudwatchSecretAccessKey`<sup>Required</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```typescript
public readonly cloudwatchSecretAccessKey: string;
```

- *Type:* string

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.datadogRegion"></a>

```typescript
public readonly datadogRegion: string;
```

- *Type:* string

---

##### `elasticsearchEndpoint`<sup>Required</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchEndpoint"></a>

```typescript
public readonly elasticsearchEndpoint: string;
```

- *Type:* string

---

##### `elasticsearchPassword`<sup>Required</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

---

##### `elasticsearchUser`<sup>Required</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.elasticsearchUser"></a>

```typescript
public readonly elasticsearchUser: string;
```

- *Type:* string

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaEndpoint"></a>

```typescript
public readonly grafanaEndpoint: string;
```

- *Type:* string

---

##### `grafanaPassword`<sup>Required</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaPassword"></a>

```typescript
public readonly grafanaPassword: string;
```

- *Type:* string

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.grafanaUser"></a>

```typescript
public readonly grafanaUser: string;
```

- *Type:* string

---

##### `httpBasicPassword`<sup>Required</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicPassword"></a>

```typescript
public readonly httpBasicPassword: string;
```

- *Type:* string

---

##### `httpBasicUser`<sup>Required</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBasicUser"></a>

```typescript
public readonly httpBasicUser: string;
```

- *Type:* string

---

##### `httpBearerToken`<sup>Required</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpBearerToken"></a>

```typescript
public readonly httpBearerToken: string;
```

- *Type:* string

---

##### `httpCodec`<sup>Required</sup> <a name="httpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCodec"></a>

```typescript
public readonly httpCodec: string;
```

- *Type:* string

---

##### `httpCompression`<sup>Required</sup> <a name="httpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpCompression"></a>

```typescript
public readonly httpCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `httpPayloadPrefix`<sup>Required</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadPrefix"></a>

```typescript
public readonly httpPayloadPrefix: string;
```

- *Type:* string

---

##### `httpPayloadSuffix`<sup>Required</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpPayloadSuffix"></a>

```typescript
public readonly httpPayloadSuffix: string;
```

- *Type:* string

---

##### `httpUri`<sup>Required</sup> <a name="httpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.httpUri"></a>

```typescript
public readonly httpUri: string;
```

- *Type:* string

---

##### `newrelicAccountId`<sup>Required</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicAccountId"></a>

```typescript
public readonly newrelicAccountId: string;
```

- *Type:* string

---

##### `newrelicLicenseKey`<sup>Required</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicLicenseKey"></a>

```typescript
public readonly newrelicLicenseKey: string;
```

- *Type:* string

---

##### `newrelicRegion`<sup>Required</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.newrelicRegion"></a>

```typescript
public readonly newrelicRegion: string;
```

- *Type:* string

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkHecendpoint"></a>

```typescript
public readonly splunkHecendpoint: string;
```

- *Type:* string

---

##### `splunkToken`<sup>Required</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.splunkToken"></a>

```typescript
public readonly splunkToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultClusterAuditLogConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterAuditLogConfig">VaultClusterAuditLogConfig</a>

---


### VaultClusterIpAllowlistStructList <a name="VaultClusterIpAllowlistStructList" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterIpAllowlistStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get"></a>

```typescript
public get(index: number): VaultClusterIpAllowlistStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultClusterIpAllowlistStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>[]

---


### VaultClusterIpAllowlistStructOutputReference <a name="VaultClusterIpAllowlistStructOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterIpAllowlistStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultClusterIpAllowlistStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterIpAllowlistStruct">VaultClusterIpAllowlistStruct</a>

---


### VaultClusterMajorVersionUpgradeConfigOutputReference <a name="VaultClusterMajorVersionUpgradeConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay">resetMaintenanceWindowDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime">resetMaintenanceWindowTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowDay` <a name="resetMaintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowDay"></a>

```typescript
public resetMaintenanceWindowDay(): void
```

##### `resetMaintenanceWindowTime` <a name="resetMaintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.resetMaintenanceWindowTime"></a>

```typescript
public resetMaintenanceWindowTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput">maintenanceWindowDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput">maintenanceWindowTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput">upgradeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay">maintenanceWindowDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime">maintenanceWindowTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType">upgradeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceWindowDayInput`<sup>Optional</sup> <a name="maintenanceWindowDayInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDayInput"></a>

```typescript
public readonly maintenanceWindowDayInput: string;
```

- *Type:* string

---

##### `maintenanceWindowTimeInput`<sup>Optional</sup> <a name="maintenanceWindowTimeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTimeInput"></a>

```typescript
public readonly maintenanceWindowTimeInput: string;
```

- *Type:* string

---

##### `upgradeTypeInput`<sup>Optional</sup> <a name="upgradeTypeInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeTypeInput"></a>

```typescript
public readonly upgradeTypeInput: string;
```

- *Type:* string

---

##### `maintenanceWindowDay`<sup>Required</sup> <a name="maintenanceWindowDay" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowDay"></a>

```typescript
public readonly maintenanceWindowDay: string;
```

- *Type:* string

---

##### `maintenanceWindowTime`<sup>Required</sup> <a name="maintenanceWindowTime" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.maintenanceWindowTime"></a>

```typescript
public readonly maintenanceWindowTime: string;
```

- *Type:* string

---

##### `upgradeType`<sup>Required</sup> <a name="upgradeType" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.upgradeType"></a>

```typescript
public readonly upgradeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultClusterMajorVersionUpgradeConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMajorVersionUpgradeConfig">VaultClusterMajorVersionUpgradeConfig</a>

---


### VaultClusterMetricsConfigOutputReference <a name="VaultClusterMetricsConfigOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterMetricsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchAccessKeyId">resetCloudwatchAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchRegion">resetCloudwatchRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchSecretAccessKey">resetCloudwatchSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey">resetDatadogApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion">resetDatadogRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchEndpoint">resetElasticsearchEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchPassword">resetElasticsearchPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchUser">resetElasticsearchUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint">resetGrafanaEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword">resetGrafanaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser">resetGrafanaUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicPassword">resetHttpBasicPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicUser">resetHttpBasicUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBearerToken">resetHttpBearerToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCodec">resetHttpCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCompression">resetHttpCompression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadPrefix">resetHttpPayloadPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadSuffix">resetHttpPayloadSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpUri">resetHttpUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicAccountId">resetNewrelicAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicLicenseKey">resetNewrelicLicenseKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicRegion">resetNewrelicRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint">resetSplunkHecendpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken">resetSplunkToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchAccessKeyId` <a name="resetCloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchAccessKeyId"></a>

```typescript
public resetCloudwatchAccessKeyId(): void
```

##### `resetCloudwatchRegion` <a name="resetCloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchRegion"></a>

```typescript
public resetCloudwatchRegion(): void
```

##### `resetCloudwatchSecretAccessKey` <a name="resetCloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetCloudwatchSecretAccessKey"></a>

```typescript
public resetCloudwatchSecretAccessKey(): void
```

##### `resetDatadogApiKey` <a name="resetDatadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogApiKey"></a>

```typescript
public resetDatadogApiKey(): void
```

##### `resetDatadogRegion` <a name="resetDatadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetDatadogRegion"></a>

```typescript
public resetDatadogRegion(): void
```

##### `resetElasticsearchEndpoint` <a name="resetElasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchEndpoint"></a>

```typescript
public resetElasticsearchEndpoint(): void
```

##### `resetElasticsearchPassword` <a name="resetElasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchPassword"></a>

```typescript
public resetElasticsearchPassword(): void
```

##### `resetElasticsearchUser` <a name="resetElasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetElasticsearchUser"></a>

```typescript
public resetElasticsearchUser(): void
```

##### `resetGrafanaEndpoint` <a name="resetGrafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaEndpoint"></a>

```typescript
public resetGrafanaEndpoint(): void
```

##### `resetGrafanaPassword` <a name="resetGrafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaPassword"></a>

```typescript
public resetGrafanaPassword(): void
```

##### `resetGrafanaUser` <a name="resetGrafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetGrafanaUser"></a>

```typescript
public resetGrafanaUser(): void
```

##### `resetHttpBasicPassword` <a name="resetHttpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicPassword"></a>

```typescript
public resetHttpBasicPassword(): void
```

##### `resetHttpBasicUser` <a name="resetHttpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBasicUser"></a>

```typescript
public resetHttpBasicUser(): void
```

##### `resetHttpBearerToken` <a name="resetHttpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpBearerToken"></a>

```typescript
public resetHttpBearerToken(): void
```

##### `resetHttpCodec` <a name="resetHttpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCodec"></a>

```typescript
public resetHttpCodec(): void
```

##### `resetHttpCompression` <a name="resetHttpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpCompression"></a>

```typescript
public resetHttpCompression(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetHttpPayloadPrefix` <a name="resetHttpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadPrefix"></a>

```typescript
public resetHttpPayloadPrefix(): void
```

##### `resetHttpPayloadSuffix` <a name="resetHttpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpPayloadSuffix"></a>

```typescript
public resetHttpPayloadSuffix(): void
```

##### `resetHttpUri` <a name="resetHttpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetHttpUri"></a>

```typescript
public resetHttpUri(): void
```

##### `resetNewrelicAccountId` <a name="resetNewrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicAccountId"></a>

```typescript
public resetNewrelicAccountId(): void
```

##### `resetNewrelicLicenseKey` <a name="resetNewrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicLicenseKey"></a>

```typescript
public resetNewrelicLicenseKey(): void
```

##### `resetNewrelicRegion` <a name="resetNewrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetNewrelicRegion"></a>

```typescript
public resetNewrelicRegion(): void
```

##### `resetSplunkHecendpoint` <a name="resetSplunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkHecendpoint"></a>

```typescript
public resetSplunkHecendpoint(): void
```

##### `resetSplunkToken` <a name="resetSplunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.resetSplunkToken"></a>

```typescript
public resetSplunkToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace">cloudwatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchDataset">elasticsearchDataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyIdInput">cloudwatchAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegionInput">cloudwatchRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKeyInput">cloudwatchSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput">datadogApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput">datadogRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpointInput">elasticsearchEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPasswordInput">elasticsearchPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUserInput">elasticsearchUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput">grafanaEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput">grafanaPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput">grafanaUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPasswordInput">httpBasicPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUserInput">httpBasicUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerTokenInput">httpBearerTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodecInput">httpCodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompressionInput">httpCompressionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefixInput">httpPayloadPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffixInput">httpPayloadSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUriInput">httpUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountIdInput">newrelicAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKeyInput">newrelicLicenseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegionInput">newrelicRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput">splunkHecendpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput">splunkTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId">cloudwatchAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegion">cloudwatchRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey">cloudwatchSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey">datadogApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion">datadogRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint">elasticsearchEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPassword">elasticsearchPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUser">elasticsearchUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint">grafanaEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword">grafanaPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser">grafanaUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPassword">httpBasicPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUser">httpBasicUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerToken">httpBearerToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodec">httpCodec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompression">httpCompression</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix">httpPayloadPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix">httpPayloadSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUri">httpUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountId">newrelicAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey">newrelicLicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegion">newrelicRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint">splunkHecendpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken">splunkToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchNamespace`<sup>Required</sup> <a name="cloudwatchNamespace" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchNamespace"></a>

```typescript
public readonly cloudwatchNamespace: string;
```

- *Type:* string

---

##### `elasticsearchDataset`<sup>Required</sup> <a name="elasticsearchDataset" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchDataset"></a>

```typescript
public readonly elasticsearchDataset: string;
```

- *Type:* string

---

##### `cloudwatchAccessKeyIdInput`<sup>Optional</sup> <a name="cloudwatchAccessKeyIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyIdInput"></a>

```typescript
public readonly cloudwatchAccessKeyIdInput: string;
```

- *Type:* string

---

##### `cloudwatchRegionInput`<sup>Optional</sup> <a name="cloudwatchRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegionInput"></a>

```typescript
public readonly cloudwatchRegionInput: string;
```

- *Type:* string

---

##### `cloudwatchSecretAccessKeyInput`<sup>Optional</sup> <a name="cloudwatchSecretAccessKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKeyInput"></a>

```typescript
public readonly cloudwatchSecretAccessKeyInput: string;
```

- *Type:* string

---

##### `datadogApiKeyInput`<sup>Optional</sup> <a name="datadogApiKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKeyInput"></a>

```typescript
public readonly datadogApiKeyInput: string;
```

- *Type:* string

---

##### `datadogRegionInput`<sup>Optional</sup> <a name="datadogRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegionInput"></a>

```typescript
public readonly datadogRegionInput: string;
```

- *Type:* string

---

##### `elasticsearchEndpointInput`<sup>Optional</sup> <a name="elasticsearchEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpointInput"></a>

```typescript
public readonly elasticsearchEndpointInput: string;
```

- *Type:* string

---

##### `elasticsearchPasswordInput`<sup>Optional</sup> <a name="elasticsearchPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPasswordInput"></a>

```typescript
public readonly elasticsearchPasswordInput: string;
```

- *Type:* string

---

##### `elasticsearchUserInput`<sup>Optional</sup> <a name="elasticsearchUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUserInput"></a>

```typescript
public readonly elasticsearchUserInput: string;
```

- *Type:* string

---

##### `grafanaEndpointInput`<sup>Optional</sup> <a name="grafanaEndpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpointInput"></a>

```typescript
public readonly grafanaEndpointInput: string;
```

- *Type:* string

---

##### `grafanaPasswordInput`<sup>Optional</sup> <a name="grafanaPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPasswordInput"></a>

```typescript
public readonly grafanaPasswordInput: string;
```

- *Type:* string

---

##### `grafanaUserInput`<sup>Optional</sup> <a name="grafanaUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUserInput"></a>

```typescript
public readonly grafanaUserInput: string;
```

- *Type:* string

---

##### `httpBasicPasswordInput`<sup>Optional</sup> <a name="httpBasicPasswordInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPasswordInput"></a>

```typescript
public readonly httpBasicPasswordInput: string;
```

- *Type:* string

---

##### `httpBasicUserInput`<sup>Optional</sup> <a name="httpBasicUserInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUserInput"></a>

```typescript
public readonly httpBasicUserInput: string;
```

- *Type:* string

---

##### `httpBearerTokenInput`<sup>Optional</sup> <a name="httpBearerTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerTokenInput"></a>

```typescript
public readonly httpBearerTokenInput: string;
```

- *Type:* string

---

##### `httpCodecInput`<sup>Optional</sup> <a name="httpCodecInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodecInput"></a>

```typescript
public readonly httpCodecInput: string;
```

- *Type:* string

---

##### `httpCompressionInput`<sup>Optional</sup> <a name="httpCompressionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompressionInput"></a>

```typescript
public readonly httpCompressionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `httpPayloadPrefixInput`<sup>Optional</sup> <a name="httpPayloadPrefixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefixInput"></a>

```typescript
public readonly httpPayloadPrefixInput: string;
```

- *Type:* string

---

##### `httpPayloadSuffixInput`<sup>Optional</sup> <a name="httpPayloadSuffixInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffixInput"></a>

```typescript
public readonly httpPayloadSuffixInput: string;
```

- *Type:* string

---

##### `httpUriInput`<sup>Optional</sup> <a name="httpUriInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUriInput"></a>

```typescript
public readonly httpUriInput: string;
```

- *Type:* string

---

##### `newrelicAccountIdInput`<sup>Optional</sup> <a name="newrelicAccountIdInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountIdInput"></a>

```typescript
public readonly newrelicAccountIdInput: string;
```

- *Type:* string

---

##### `newrelicLicenseKeyInput`<sup>Optional</sup> <a name="newrelicLicenseKeyInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKeyInput"></a>

```typescript
public readonly newrelicLicenseKeyInput: string;
```

- *Type:* string

---

##### `newrelicRegionInput`<sup>Optional</sup> <a name="newrelicRegionInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegionInput"></a>

```typescript
public readonly newrelicRegionInput: string;
```

- *Type:* string

---

##### `splunkHecendpointInput`<sup>Optional</sup> <a name="splunkHecendpointInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpointInput"></a>

```typescript
public readonly splunkHecendpointInput: string;
```

- *Type:* string

---

##### `splunkTokenInput`<sup>Optional</sup> <a name="splunkTokenInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkTokenInput"></a>

```typescript
public readonly splunkTokenInput: string;
```

- *Type:* string

---

##### `cloudwatchAccessKeyId`<sup>Required</sup> <a name="cloudwatchAccessKeyId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchAccessKeyId"></a>

```typescript
public readonly cloudwatchAccessKeyId: string;
```

- *Type:* string

---

##### `cloudwatchRegion`<sup>Required</sup> <a name="cloudwatchRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchRegion"></a>

```typescript
public readonly cloudwatchRegion: string;
```

- *Type:* string

---

##### `cloudwatchSecretAccessKey`<sup>Required</sup> <a name="cloudwatchSecretAccessKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.cloudwatchSecretAccessKey"></a>

```typescript
public readonly cloudwatchSecretAccessKey: string;
```

- *Type:* string

---

##### `datadogApiKey`<sup>Required</sup> <a name="datadogApiKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogApiKey"></a>

```typescript
public readonly datadogApiKey: string;
```

- *Type:* string

---

##### `datadogRegion`<sup>Required</sup> <a name="datadogRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.datadogRegion"></a>

```typescript
public readonly datadogRegion: string;
```

- *Type:* string

---

##### `elasticsearchEndpoint`<sup>Required</sup> <a name="elasticsearchEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchEndpoint"></a>

```typescript
public readonly elasticsearchEndpoint: string;
```

- *Type:* string

---

##### `elasticsearchPassword`<sup>Required</sup> <a name="elasticsearchPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchPassword"></a>

```typescript
public readonly elasticsearchPassword: string;
```

- *Type:* string

---

##### `elasticsearchUser`<sup>Required</sup> <a name="elasticsearchUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.elasticsearchUser"></a>

```typescript
public readonly elasticsearchUser: string;
```

- *Type:* string

---

##### `grafanaEndpoint`<sup>Required</sup> <a name="grafanaEndpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaEndpoint"></a>

```typescript
public readonly grafanaEndpoint: string;
```

- *Type:* string

---

##### `grafanaPassword`<sup>Required</sup> <a name="grafanaPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaPassword"></a>

```typescript
public readonly grafanaPassword: string;
```

- *Type:* string

---

##### `grafanaUser`<sup>Required</sup> <a name="grafanaUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.grafanaUser"></a>

```typescript
public readonly grafanaUser: string;
```

- *Type:* string

---

##### `httpBasicPassword`<sup>Required</sup> <a name="httpBasicPassword" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicPassword"></a>

```typescript
public readonly httpBasicPassword: string;
```

- *Type:* string

---

##### `httpBasicUser`<sup>Required</sup> <a name="httpBasicUser" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBasicUser"></a>

```typescript
public readonly httpBasicUser: string;
```

- *Type:* string

---

##### `httpBearerToken`<sup>Required</sup> <a name="httpBearerToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpBearerToken"></a>

```typescript
public readonly httpBearerToken: string;
```

- *Type:* string

---

##### `httpCodec`<sup>Required</sup> <a name="httpCodec" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCodec"></a>

```typescript
public readonly httpCodec: string;
```

- *Type:* string

---

##### `httpCompression`<sup>Required</sup> <a name="httpCompression" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpCompression"></a>

```typescript
public readonly httpCompression: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `httpPayloadPrefix`<sup>Required</sup> <a name="httpPayloadPrefix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadPrefix"></a>

```typescript
public readonly httpPayloadPrefix: string;
```

- *Type:* string

---

##### `httpPayloadSuffix`<sup>Required</sup> <a name="httpPayloadSuffix" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpPayloadSuffix"></a>

```typescript
public readonly httpPayloadSuffix: string;
```

- *Type:* string

---

##### `httpUri`<sup>Required</sup> <a name="httpUri" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.httpUri"></a>

```typescript
public readonly httpUri: string;
```

- *Type:* string

---

##### `newrelicAccountId`<sup>Required</sup> <a name="newrelicAccountId" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicAccountId"></a>

```typescript
public readonly newrelicAccountId: string;
```

- *Type:* string

---

##### `newrelicLicenseKey`<sup>Required</sup> <a name="newrelicLicenseKey" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicLicenseKey"></a>

```typescript
public readonly newrelicLicenseKey: string;
```

- *Type:* string

---

##### `newrelicRegion`<sup>Required</sup> <a name="newrelicRegion" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.newrelicRegion"></a>

```typescript
public readonly newrelicRegion: string;
```

- *Type:* string

---

##### `splunkHecendpoint`<sup>Required</sup> <a name="splunkHecendpoint" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkHecendpoint"></a>

```typescript
public readonly splunkHecendpoint: string;
```

- *Type:* string

---

##### `splunkToken`<sup>Required</sup> <a name="splunkToken" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.splunkToken"></a>

```typescript
public readonly splunkToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VaultClusterMetricsConfig;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterMetricsConfig">VaultClusterMetricsConfig</a>

---


### VaultClusterTimeoutsOutputReference <a name="VaultClusterTimeoutsOutputReference" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer"></a>

```typescript
import { vaultCluster } from '@cdktf/provider-hcp'

new vaultCluster.VaultClusterTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultCluster.VaultClusterTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultClusterTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultCluster.VaultClusterTimeouts">VaultClusterTimeouts</a>

---



